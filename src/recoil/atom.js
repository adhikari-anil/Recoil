import { atom } from "recoil"

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
    default: 100.5
})
export const notificationAtom = atom({
    key: "notification-atom",
    default: 1000
})