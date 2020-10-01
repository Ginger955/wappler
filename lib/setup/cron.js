const fs = require('fs-extra');
const debug = require('debug')('server-connect:setup');

function exec(job) {
    return async () => {
        if (job.exec && fs.existsSync(`app/api/${job.exec}.json`)) {
            const App = require('../core/app');
            const app = new App(job, {});
            return app.exec(await fs.readJSON(`app/api/${job.exec}.json`), true);
        } else {
            debug('Invalid cron job: %O', job);
        }
    }
}

module.exports = {
    start: function() {
        if (fs.existsSync('app/config/cron.json')) {
            const schedule = require('node-schedule');
            const { jobs } = fs.readJSONSync('app/config/cron.json');

            for (let job of jobs) {
                if (job.rule == '@reboot') {
                    setImmediate(exec(job));
                } else {
                    schedule.scheduleJob(job, exec(job));
                }
            }

            debug('Cronjobs scheduler started');
        }
    }
};