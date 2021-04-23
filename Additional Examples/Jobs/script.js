const httpGet = url => {
    return fetch(url).then(response => {
        return response.json();
    });
};

const data = document.getElementById('data');
let content = "";

const cutString = string => {
    return string.slice(0, 700) + "...";
};

httpGet('https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/jobs.json')
    .then(jobs => {

        for (const job of jobs) {
            content += `
                <div class="card" style="margin-top: 2rem;">
                    <div class="card-header">
                        ${job.company}
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${job.title}</h5>
                        <p class="card-text">
                            ${cutString(job.description)}
                        </p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${job.id}">More info</button>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal${job.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" style="max-width: 1250px;">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${job.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                Description:
                                ${job.description}

                                Location:
                                ${job.location}
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            `;
        }

        data.innerHTML = content;

    })
    .catch(err => {
        console.log("Error has occured: " + err.message);
    });