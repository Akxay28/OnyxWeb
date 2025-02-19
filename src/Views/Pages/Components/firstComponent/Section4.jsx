import React from 'react'

const Section4 = ({ q1, q2, q3, q4, q5, q6, q7, q8, q9, q1a, q2a, q3a, q4a, q5a, q6a, q7a }) => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-lg-6 pb-lg-0 pb-5 align-content-center text-center">
                            <p className="m-0 display-6 fw-bold">Frequently Asked <br />
                                Questions</p>
                        </div>
                        <div className="col-lg-6 px-md-5 px-2">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            {q1}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{q1a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            {q2}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q2a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            {q3}                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q3a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            {q4}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q4a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            {q5}                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q5a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                            {q6}                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q6a}</div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                            {q7}                                        </button>
                                    </h2>
                                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">  {q7a}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section4;
