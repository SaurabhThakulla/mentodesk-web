import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, initialTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    product: 'mentodesk'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', color: 'var(--text-muted)' }}>
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
              {initialTitle || 'Request Live Product Demo'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Connect with our enterprise solutions architecture team.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="input-minimal" 
                  placeholder="Dr. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Work Email</label>
                <input 
                  type="email" 
                  required 
                  className="input-minimal" 
                  placeholder="s.jenkins@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Institution / Organization</label>
                <input 
                  type="text" 
                  required 
                  className="input-minimal" 
                  placeholder="Niellz International College"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'block' }}>Primary Product Interest</label>
                <select 
                  className="input-minimal"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="mentodesk">MentoDesk Smart Campus Platform</option>
                  <option value="fee">Automated Fee Management Engine</option>
                  <option value="lms">Customized LMS Virtual Learning</option>
                  <option value="custom">Custom Software Engineering & ERP</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                Submit Demo Request
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 size={48} color="#00b853" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Demo Request Received</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our technical solutions team will reach out within 4 business hours to schedule your live walkthrough.
            </p>
            <button onClick={handleClose} className="btn-secondary" style={{ padding: '0.6rem 1.4rem' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
