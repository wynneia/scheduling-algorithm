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

        this.queue.forEach(process => {
            while (this.currentTime < process.arrivalTime) {
                console.log(`CPU waiting at time ${this.currentTime}`);
                this.currentTime++;
            }

            console.log(`Executing process ${process.id} at time ${this.currentTime}`);
            this.currentTime += process.burstTime;
        });
    }
}

const process1 = new Process(1, 0, 5);
const process2 = new Process(2, 2, 3);
const process3 = new Process(3, 4, 6);

const cpu = new CPU();
cpu.addProcess(process1);
cpu.addProcess(process2);
cpu.addProcess(process3);

cpu.execute();
