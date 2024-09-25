import React, { useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import './register.css'; 

import Topbar from "../Navbar/Topbar";

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        passingOutYear: '',
        resume: null,
        course: '',
        experience: '',
        photo: null,
        position: '',
        portfolioLink: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
    <>
        <Topbar />

        <Container style={{marginTop:"150px"}}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="m-2 text-primary mb-4">Fita Students Form</h1>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <div className="form-group">
                                    <label className="form-label required">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your qualification"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Passing Out Year</label>
                                    <select
                                        className="form-control"
                                        name="passingOutYear"
                                        value={formData.passingOutYear}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    >
                                        <option value="">Select Year</option>
                                        {[...Array(30).keys()].map(year => {
                                            const yearValue = new Date().getFullYear() - year;
                                            return (
                                                <option key={yearValue} value={yearValue}>
                                                    {yearValue}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Resume (PDF)</label>
                                    <input 
                                        type="file"
                                        className="form-control"
                                        accept=".pdf"
                                        name="resume"
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"97%" }}
                                    />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="form-group">
                                    <label className="form-label required">Course</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the course you're applying for"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Experience</label>
                                    <select
                                        className="form-control"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    >
                                        <option value="">Select Experience Level</option>
                                        <option value="0-1">0-1 years</option>
                                        <option value="1-3">1-3 years</option>
                                        <option value="3-5">3-5 years</option>
                                        <option value="5+">5+ years</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        name="photo"
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label required">Position</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the position you're applying for"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Portfolio Link (Optional)</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="Enter your portfolio link"
                                        name="portfolioLink"
                                        value={formData.portfolioLink}
                                        onChange={handleChange}
                                        style={{ padding: "15px",width:"98%" }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button variant="warning" className="mt-2 p-3" style={{marginLeft:"25%", width:"50%",borderRadius:"25px"}} type="submit">
                            Apply
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    );
}
