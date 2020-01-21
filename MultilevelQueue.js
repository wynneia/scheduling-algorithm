class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
    }
}

class MultiLevelQueue {
    constructor() {
        this.queues = [[], []];
        this.currentTime = 0;
    }

    addProcess(process, queueNumber) {
        this.queues[queueNumber].push(process);
    }

    execute() {
        while (this.queues[0].length > 0 || this.queues[1].length > 0) {
            if (this.queues[0].length > 0) {
                const currentProcess = this.queues[0].shift();
                console.log(`Executing process ${currentProcess.id} from Queue 0 at time ${this.currentTime}`);
                this.currentTime += currentProcess.burstTime;
            } else if (this.queues[1].length > 0) {
                const currentProcess = this.queues[1].shift();
                console.log(`Executing process ${currentProcess.id} from Queue 1 at time ${this.currentTime}`);
                this.currentTime += currentProcess.burstTime;
            }
        }
    }
}

const process1 = new Process(1, 0, 5);
const process2 = new Process(2, 1, 3);
const process3 = new Process(3, 2, 6);
const process4 = new Process(4, 3, 2);

const multiLevelQueue = new MultiLevelQueue();
multiLevelQueue.addProcess(process1, 0); 
multiLevelQueue.addProcess(process2, 0);
multiLevelQueue.addProcess(process3, 1);
multiLevelQueue.addProcess(process4, 1);

multiLevelQueue.execute();
