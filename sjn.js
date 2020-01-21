class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
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
            let shortestJobIndex = 0;
            let shortestBurstTime = this.queue[0].burstTime;

            for (let i = 1; i < this.queue.length; i++) {
                if (this.queue[i].arrivalTime <= this.currentTime && this.queue[i].burstTime < shortestBurstTime) {
                    shortestBurstTime = this.queue[i].burstTime;
                    shortestJobIndex = i;
                }
            }

            const currentProcess = this.queue.splice(shortestJobIndex, 1)[0];

            console.log(`Executing process ${currentProcess.id} at time ${this.currentTime}`);
            this.currentTime += currentProcess.burstTime;
        }
    }
}

const process1 = new Process(1, 0, 5);
const process2 = new Process(2, 1, 3);
const process3 = new Process(3, 2, 6);

const cpu = new CPU();
cpu.addProcess(process1);
cpu.addProcess(process2);
cpu.addProcess(process3);

cpu.execute();
