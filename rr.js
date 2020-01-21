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
        this.timeQuantum = 2;
        this.currentTime = 0;
    }

    addProcess(process) {
        this.queue.push(process);
    }

    execute() {
        while (this.queue.length > 0) {
            const currentProcess = this.queue.shift();
            let executionTime = Math.min(this.timeQuantum, currentProcess.remainingTime);

            while (executionTime > 0) {
                console.log(`Executing process ${currentProcess.id} at time ${this.currentTime}`);
                currentProcess.remainingTime--;
                executionTime--;
                this.currentTime++;

                if (currentProcess.remainingTime === 0) break;
            }

            if (currentProcess.remainingTime > 0) {
                this.queue.push(currentProcess);
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
