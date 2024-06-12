export const INITIALIZE_NOTES='INITIALIZE_NOTES';
export default function intitialize(note){
    return {type:INITIALIZE_NOTES,
        payload:note
    }
}