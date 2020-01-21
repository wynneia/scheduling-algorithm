class Process {
    constructor(id, arrivalTime, burstTime, priority) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.priority = priority;
    }
}

class CPU {
    constructor() {
        this.queue = [];
        this.currentTime = 0;
    }

    addProcess(process) {
        this.queue.push(process);
    }

    execute() {
        this.queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

        while (this.queue.length > 0) {
            let currentProcess = null;
            let highestPriority = Number.MAX_SAFE_INTEGER;

            for (let i = 0; i < this.queue.length; i++) {
                if (this.queue[i].arrivalTime <= this.currentTime && this.queue[i].priority < highestPriority) {
                    highestPriority = this.queue[i].priority;
                    currentProcess = this.queue[i];
                }
            }

            if (currentProcess === null) {
                this.currentTime++;
                continue;
            }

            console.log(`Executing process ${currentProcess.id} at time ${this.currentTime}`);
            this.currentTime += currentProcess.burstTime;
            
            const index = this.queue.indexOf(currentProcess);
            this.queue.splice(index, 1);
        }
    }
}

const process1 = new Process(1, 0, 5, 2);
const process2 = new Process(2, 1, 3, 1);
const process3 = new Process(3, 2, 6, 3);

const cpu = new CPU();
cpu.addProcess(process1);
cpu.addProcess(process2);
cpu.addProcess(process3);

cpu.execute();
