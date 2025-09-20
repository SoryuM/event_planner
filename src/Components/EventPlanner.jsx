import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
{/* Page Header */}
<header>
<h1>Welcome to Event Planner</h1>
</header>

<section className="description">
    <p>
        Plan and Organize your events effortlessly with Event Planner.
        From birthdays to corporate meetings, we've got you covered.
    </p>
    <button className='get-started-button'>Get Started</button>
</section>

 <section className="events_categories">
    <ul>
        <h2>Social Events:</h2>
        <li>Birthday Parties</li>
        <li>Anniversary</li>
        <li>Wedding</li>
        <li>Baby Shower</li>
        <li>Graduation parties</li>
        <li>Family Reunions</li>
    </ul>

    <ul>
        <h2>Entertainment Events: </h2>
        <li>Concert</li>
        <li>Music</li>
        <li>Film</li>
        <li>Comedy</li>
        <li>Art exhibitions</li>
        <li>Cultural Events</li>
    </ul>

    <ul>
        
        <h2>Community Events:</h2>
        <li>Fundraising events</li>
        <li>Charity galas</li>
        <li>Volunteer drives</li>
        <li>Neighborhood block parties</li>
        <li>Community Festivals</li>
        <li>Cultural celebrations</li>
    </ul>
</section>

 <section className="features">
    <h2>Features</h2>

    <ul>
        <li>Easy event creation and management</li>
        <li>Customizable event templates</li>
        <li>Guest list management</li>
        <li>Real-time collaboration</li>
        <li>Reminders and Notification</li>
    </ul>
</section>

 <section className="testimonials">

        <h2>Testimonials</h2>
        <div className='testimonials'>
            <p>"Event Planner made organizing my wedding a breeze. Highly recommend!"</p>
            <p className='author'>Emily johnson</p>
        </div>

        <div>
            <p>"I use Event Planner for all my corporates events. It saves me so much time and effort!"</p>
            <p>John Smith</p>
        </div>
</section>

 <section className="contact">

        <h2>Contact us</h2>
        <form> 
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button className='submit-button'>Send</button>
        </form>

</section>

</div>
    );
};

export default EventPlanner;
