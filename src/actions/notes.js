export const DISPLAY_NOTE='DISPLAY_NOTE';
function displaynote(note){
    return {
        type:DISPLAY_NOTE,
        payload:note
    }
}
export default displaynote;