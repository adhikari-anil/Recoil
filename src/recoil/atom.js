import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "network-atom",
    default: 104
})

export const messageAtom = atom({
    key: "message-atom",
    default: 0
})
export const jobsAtom = atom({
    key: "jobs-atom",
    default: 0
})
export const notificationAtom = atom({
    key: "notification-atom",
    default: 12
})

// This is selector....

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom); // it stores the latest value that is stored in networkAtom
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messageAtomCount = get(messageAtom);
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount;
    }
})