#!/bin/zsh
set -e
REPO=/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel
OWNED="$REPO/research/workstreams/2026-08-28-agency-os-pilot/lanes/02-module-supply"
node --input-type=module - "$REPO" "$OWNED" <<'NODE'
import {readFileSync,readdirSync,realpathSync} from 'node:fs';
import {join} from 'node:path';
const repo=process.argv[2], owned=process.argv[3];
const matrix=JSON.parse(readFileSync(join(owned,'value-matrix.json'),'utf8'));
const state=JSON.parse(readFileSync(join(owned,'lane-state.json'),'utf8'));
const lines=readFileSync(join(owned,'module-shortlist.jsonl'),'utf8').trim().split(/\n/);
const shortlist=lines.map((line,i)=>{try{return JSON.parse(line)}catch(e){throw new Error('JSONL line '+(i+1)+': '+e.message)}});
const registry=readFileSync(join(repo,'knowledge/capability-shelf/source-registry.jsonl'),'utf8').trim().split(/\n/).map(JSON.parse);
const rmap=new Map(registry.map(x=>[x.source_id,x]));
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
assert(registry.length===191,'registry rows '+registry.length);
assert(shortlist.length===30,'shortlist rows '+shortlist.length);
assert(matrix.assessments.length===30,'matrix assessments '+matrix.assessments.length);
assert(new Set(matrix.assessments.map(x=>x.assessment_id)).size===30,'matrix assessment ids duplicate');
assert(new Set(shortlist.map(x=>x.matrix_assessment_id)).size===30,'shortlist assessment ids duplicate');
assert(matrix.central_selection_method.dimensions.length===10,'matrix dimensions');
assert(matrix.central_selection_method.score_equation.notation.includes('DiamondScore'),'equation');
const pairs=[];
for(const a of matrix.assessments){
  assert(a.block_ids.length>0,a.assessment_id+' missing block');
  for(const b of a.block_ids)pairs.push(b+'|'+a.source_id);
  assert(rmap.has(a.source_id),a.assessment_id+' source not in registry');
  assert(a.url===rmap.get(a.source_id).url,a.assessment_id+' url mismatch');
  const expectedDims=['adaptation_normalization_cost','architecture_source_quality','cross_recipe_reuse','evidence_confidence','functional_product_completeness','integration_seams','maintenance_upstream_model','out_of_box_operability','runtime_burden','visual_ui_quality'];
  assert(Object.keys(a.dimension_scores).sort().join(',')===expectedDims.join(','),a.assessment_id+' dimensions incomplete');
  const p=matrix.central_selection_method.profiles[a.score_profile];
  const d=a.dimension_scores;
  const logMean=Object.entries(p.weights).reduce((s,[k,w])=>s+w*Math.log(Math.max(d[k]/100,.01)),0);
  const g=100*Math.exp(logMean);
  const cf=.5+.5*d.evidence_confidence/100;
  const gates=Object.entries(p.hard_gates).map(([k,t])=>({k,t,v:d[k]}));
  const failed=gates.filter(x=>x.v<x.t);
  const ratio=Math.min(...gates.map(x=>x.v/(x.t+20)));
  const expected=failed.length?0:(g*cf*Math.min(1,ratio));
  const actual=a.diamond_score.diamond_score;
  assert(Math.abs(actual-Number(expected.toFixed(2)))<0.011,a.assessment_id+' score '+actual+' != '+expected);
  assert(a.diamond_score.gate_status===(failed.length?'BLOCKED':'PASS'),a.assessment_id+' gate mismatch');
  assert(a.role_filter_pass===true,a.assessment_id+' role filter false');
  const s=shortlist.find(x=>x.matrix_assessment_id===a.assessment_id);
  assert(s && s.source_id===a.source_id && s.url===a.url,a.assessment_id+' shortlist projection mismatch');
  assert(s.diamond_score===actual,a.assessment_id+' shortlist score mismatch');
  for(const field of ['normalization_surgery','api_event_seams','runtime_data_burden','quality_evidence','unresolved_source_reading_gates','rights_reimplementation_cost','falsifier'])assert(a[field]!==undefined,a.assessment_id+' missing '+field);
}
assert(new Set(pairs).size===pairs.length,'duplicate block/source pairs '+(pairs.length-new Set(pairs).size));
for(const id of Object.keys(matrix.decision_policies)){
  const as=matrix.assessments.filter(x=>x.decision_id===id);
  assert(as.length===3,id+' candidate count '+as.length);
  for(const role of ['primary','backup','pattern_reference'])assert(as.filter(x=>x.candidate_role===role).length===1,id+' '+role+' constraint');
}
assert(new Set(shortlist.map(x=>x.source_id)).size===28,'unique source count '+new Set(shortlist.map(x=>x.source_id)).size);
assert(matrix.operator_positive_anchors.length===4,'anchor count');
assert(new Set(matrix.operator_positive_anchors.map(x=>x.source_id)).size===4,'anchor identities');
assert(state.funnel.candidate_edge_count===30 && state.funnel.unique_source_count===28,'state counts');
const files=readdirSync(owned).sort();
assert(files.join('|')==='lane-state.json|module-shortlist.jsonl|supply-decisions.md|value-matrix.json|verify.sh','owned files '+files.join(','));
for(const f of files){const p=realpathSync(join(owned,f));assert(p.startsWith(realpathSync(owned)+'/'),'boundary '+p)}
console.log('PASS jsonl=30 matrix=30 unique_sources=28 unique_pairs='+pairs.length+' decisions='+Object.keys(matrix.decision_policies).length+' anchors=4 registry=191 owned_files='+files.length);
NODE
while IFS= read -r url; do
  curl -fsSIL --max-time 20 -o /dev/null "$url"
done < <(node --input-type=module - "$OWNED" <<'NODE'
import {readFileSync} from 'node:fs';
const owned=process.argv[2];
const urls=new Set(readFileSync(owned+'/module-shortlist.jsonl','utf8').trim().split(/\n/).map(x=>JSON.parse(x).url));
for(const url of urls)console.log(url);
NODE
)
echo 'PASS source_url_resolution=28'

