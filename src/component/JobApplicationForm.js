import React, { useState } from 'react';

const JobApplicationForm = ({ jobTitle, jobDescription, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    about: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);
    data.append('about', formData.about);
    data.append('jobTitle', jobTitle);

    try {
      const response = await fetch('http://localhost:5123/api/apply', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSuccessMessage('Application submitted successfully!');
        setIsSubmitted(true);
        if (onSuccess) onSuccess();  // Call onSuccess to close modal
      } else {
        setSuccessMessage('Failed to submit the application.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Error submitting the application.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return <div>{successMessage}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <div className="mb-3">
  <h5>Job Details</h5>
  <p><strong>Location:</strong> {jobDescription?.location}</p>
  <p><strong>Experience:</strong> {jobDescription?.experience}</p>
  {jobDescription?.requirements && (
    <div>
      <strong>Requirements:</strong>
      <ul>
        {jobDescription.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  )}
  {jobDescription?.responsibilities && (
    <div>
      <strong>Responsibilities:</strong>
      <ul>
        {jobDescription.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  )}
  {jobDescription?.qualifications && (
    <div>
      <strong>Qualifications:</strong>
      <ul>
        {jobDescription.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
    </div>
  )}
  {jobDescription?.goodToHave && (
    <div>
      <strong>Good to Have:</strong>
      <ul>
        {jobDescription.goodToHave.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )}
</div>


      {/* Form fields */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="resume" className="form-label">Resume</label>
        <input type="file" className="form-control" id="resume" name="resume" onChange={handleFileChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="about" className="form-label">About (Optional)</label>
        <textarea className="form-control" id="about" name="about" value={formData.about} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default JobApplicationForm;
