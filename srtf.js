class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.remainingTime = burstTime; 
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
        while (this.queue.length > 0) {
            this.queue.sort((a, b) => a.remainingTime - b.remainingTime || a.arrivalTime - b.arrivalTime);

            const currentProcess = this.queue[0];
            this.queue.shift();

            console.log(`Executing process ${currentProcess.id} at time ${this.currentTime}`);
            this.currentTime += currentProcess.remainingTime;
            currentProcess.remainingTime = 0;

            for (const process of this.queue) {
                if (process.arrivalTime <= this.currentTime) {
                    process.remainingTime -= (this.currentTime - process.arrivalTime);
                }
            }
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
