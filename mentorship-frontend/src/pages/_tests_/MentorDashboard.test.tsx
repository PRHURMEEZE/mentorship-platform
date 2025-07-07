import React from 'react';
import { render, screen } from '@testing-library/react';
import MentorDashboard from '../MentorDashboard';
import '@testing-library/jest-dom';

describe('MentorDashboard', () => {
  test('renders dashboard with summary cards', () => {
    render(<MentorDashboard />);

    expect(screen.getByText(/Mentor Panel/i)).toBeInTheDocument();
    
    // Use getAllByText when duplicate text exists
    const menteeHeadings = screen.getAllByText(/Active Mentees/i);
    expect(menteeHeadings[0]).toBeInTheDocument();

    expect(screen.getByText(/Upcoming Sessions/i)).toBeInTheDocument();
    expect(screen.getByText(/Unread Messages/i)).toBeInTheDocument();
  });
});
