import create, { StateCreator } from 'zustand';

interface TimeSlice {
    time: number
    goal: number
    percent: number
    setTime: (newTime: number) => void
    setGoal: (newGoal: number) => void
    setPercent: (newPercent: number) => void
    running: boolean
    setRunning: (isRunning: boolean) => void
}


const createTimeSlice: StateCreator<TimeSlice, [], []> = (set) => ({
    time: 0,
    setTime: (newTime) => set(() => ({ time: newTime })),
    goal: 0,
    setGoal: (newGoal) => set(() => ({ goal: newGoal })),
    percent: 0,
    setPercent: (newPercent) => set(() => ({ percent: newPercent })),
    running: false,
    setRunning: (isRunning) => set(() => ({ running: isRunning })),

})

const useStore = create<TimeSlice>()((...a) => ({
    ...createTimeSlice(...a),
}))

export default useStore;