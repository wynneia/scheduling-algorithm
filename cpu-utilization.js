class Process {
    constructor(id, executionTime) {
        this.id = id;
        this.executionTime = executionTime;
    }
}

class CPU {
    constructor() {
        this.queue = [];
        this.currentTime = 0;
        this.totalExecutionTime = 0;
    }

    addProcess(process) {
        this.queue.push(process);
    }

    execute() {
        while (this.queue.length > 0) {
            const currentProcess = this.queue.shift();

            console.log(`Executing process ${currentProcess.id} at time ${this.currentTime}`);
            this.totalExecutionTime += currentProcess.executionTime;
            this.currentTime += currentProcess.executionTime;
        }

        const totalSimulationTime = this.currentTime;
        const utilizationPercentage = (this.totalExecutionTime / totalSimulationTime) * 100;

        console.log(`Total execution time: ${this.totalExecutionTime}`);
        console.log(`Total simulation time: ${totalSimulationTime}`);
        console.log(`CPU utilization: ${utilizationPercentage.toFixed(2)}%`);
    }
}

const process1 = new Process(1, 5);
const process2 = new Process(2, 3);
const process3 = new Process(3, 6);

const cpu = new CPU();
cpu.addProcess(process1);
cpu.addProcess(process2);
cpu.addProcess(process3);

cpu.execute();
