ss.importIncludeScript('calculateCAB');

let approvers = [];
if (!!current.customized_cab) {
    approvers = approvers.concat(current.customized_cab.split(','));
}
if (!current.ignore_automatically_generated_cab) {
    const includeScriptResult = calculateCAB(current);
    approvers = approvers.concat(includeScriptResult);
}
//overkill filtration just in case
answer = (approvers.filter(approverID => Boolean(approverID)));


addEventListener extends export default function (params) {
    
};
