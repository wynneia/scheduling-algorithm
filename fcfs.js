class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.remainingTime = burstTime;
        this.completionTime = 0;
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
        this.queue
            .sort((a, b) => a.arrivalTime - b.arrivalTime)
            .forEach(process => {
                while (process.remainingTime > 0) {
                    console.log(`Executing process ${process.id} at time ${this.currentTime}`);
                    process.remainingTime--;
                    this.currentTime++;
                }
                process.completionTime = this.currentTime;
            });

        // Calculate TAT, ATAT, WT, AWT
        let totalTAT = 0;
        let totalWT = 0;
        this.queue.forEach(process => {
            const tat = process.completionTime - process.arrivalTime;
            const wt = tat - process.burstTime;
            totalTAT += tat;
            totalWT += wt;
            console.log(`Process ${process.id}: TAT=${tat}, WT=${wt}`);
        });

        const numProcesses = this.queue.length;
        const atat = totalTAT / numProcesses;
        const awt = totalWT / numProcesses;
        console.log(`Average Turnaround Time (ATAT): ${atat}`);
        console.log(`Average Waiting Time (AWT): ${awt}`);
    }
}

const process1 = new Process(1, 0, 5);
const process2 = new Process(2, 2, 4);
const process3 = new Process(3, 3, 7);
const process4 = new Process(4, 5, 9);
const process5 = new Process(5, 6, 8);

const cpu = new CPU();
cpu.addProcess(process1);
cpu.addProcess(process2);
cpu.addProcess(process3);
cpu.addProcess(process4);
cpu.addProcess(process5);

cpu.execute();
