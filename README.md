# The World of Mines - Website

A dynamic website for "The World of Mines" mining company showcasing their services, machinery, mining sites, and recruitment opportunities.

## Project Structure

```
/workspaces/world/
├── index.html           # Main HTML file with all sections
├── style.css            # Complete styling and responsive design
├── script.js            # JavaScript for interactivity and forms
├── background.jpg       # Background image (add your mining site image here)
├── mining1.jpg          # Slideshow image 1
├── mining2.jpg          # Slideshow image 2
├── mining3.jpg          # Slideshow image 3
├── mining4.jpg          # Slideshow image 4
└── README.md            # This file
```

## Features

### 1. **Navigation Panel**
   - Company logo (⛏️ emoji)
   - Company name "The World of Mines"
   - Four main navigation tabs: Home, About, Machinaries, Sites, Contact

### 2. **Home Section**
   - Slideshow of mining site images
   - Auto-rotating with manual navigation arrows
   - Dot indicators for slide selection

### 3. **About Section**
   - Company information
   - Company location details (Punjab)
   - Explanation about mining industry
   - Core values with cards
   - Company mission statement

### 4. **Machinaries Section**
   - Information about 6 main mining machines:
     - Excavators
     - Drilling Machines
     - Haul Trucks
     - Crushers
     - Loaders
     - Screening Equipment
   - Each with specifications and usage details

### 5. **Sites Section**
   - Information about 4 active mining sites in Punjab:
     - Mohali Mining Complex
     - Ludhiana Quarry
     - Amritsar Extraction Unit
     - Jalandhar Mineral Park

### 6. **Forms**
   - **Client Inquiry Form**: For procurement of mining materials
   - **Recruitment Form**: For job applications
   - **Quick Contact Form**: In the contact section
   - Form validation with error messages

### 7. **Contact Section**
   - Head office details
   - Phone numbers
   - Email addresses
   - Business hours
   - Social media links

## Adding Images

### Background Image
1. Place your mining site image in the root folder named `background.jpg`
2. The image will appear with light transparency (92% opacity) as the page background

### Slideshow Images
1. Add 4 mining site images in the root folder:
   - `mining1.jpg`
   - `mining2.jpg`
   - `mining3.jpg`
   - `mining4.jpg`

**Recommended image specifications:**
- Format: JPG, PNG, or WebP
- Size: 1200x500px or larger (will be scaled responsively)
- Quality: High quality images for professional appearance

## How to Run

### Option 1: Using Python (Recommended)
```bash
cd /workspaces/world
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 2: Using Node.js
```bash
cd /workspaces/world
npx http-server
```

### Option 3: Direct File Opening
Simply open `index.html` in your web browser (note: some features may not work with `file://` protocol)

## Features Breakdown

### Responsive Design
- Mobile-friendly layout
- Adapts to all screen sizes (desktop, tablet, mobile)
- Touch-friendly buttons and navigation

### Form Validation
- Email validation
- Phone number validation
- Age verification for recruitment form
- Required field checking
- User-friendly error messages

### Interactive Elements
- Smooth section transitions
- Auto-rotating slideshow (5-second intervals)
- Animated hover effects
- Smooth scrolling navigation

### Color Scheme
- Primary: Gold (#d4a574) - Mining/mineral color
- Secondary: Dark Blue (#2c3e50) - Professional look
- Light backgrounds with subtle shadows
- Professional typography

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Form Data Handling

Currently, form submissions are logged to the browser console. To handle form data:

1. **Backend Integration**: Connect forms to a backend service (Node.js, Python Flask, PHP, etc.)
2. **Email Service**: Integrate with email service (SendGrid, Mailgun, etc.)
3. **Database**: Store submissions in a database
4. **Local Storage**: Use browser's localStorage for temporary storage

Example console logging shows:
```javascript
Client Inquiry Submitted: {
    name: "",
    email: "",
    phone: "",
    mineralType: "",
    quantity: "",
    submittedAt: ""
}
```

## Customization

### Colors
Modify the CSS variables in `style.css`:
```css
:root {
    --primary-color: #d4a574;      /* Gold */
    --secondary-color: #2c3e50;    /* Dark Blue */
    --accent-color: #e74c3c;       /* Red */
    --light-bg: #ecf0f1;           /* Light Gray */
}
```

### Company Information
Edit text directly in `index.html`:
- Company name
- About section content
- Contact information
- Address details

### Slideshow Duration
Change the autoplay interval in `script.js`:
```javascript
setTimeout(autoSlideshow, 5000); // 5000ms = 5 seconds
```

## Performance Tips

1. **Optimize Images**: Compress images to reduce file size
2. **Lazy Loading**: Images load as needed (slideshow images)
3. **Minification**: For production, minify CSS and JavaScript
4. **Caching**: Use browser caching for static assets

## Future Enhancements

- [ ] Add Google Maps integration for site locations
- [ ] Implement backend for form submissions
- [ ] Add photo gallery with lightbox
- [ ] Integrate with Google Analytics
- [ ] Add multilingual support (English, Hindi, Punjabi)
- [ ] Social media integration
- [ ] Blog section for industry news
- [ ] Equipment rental/sales functionality
- [ ] Live chat support
- [ ] Mobile app companion

## Support & Maintenance

The website includes:
- Error handling for missing images
- Graceful degradation for older browsers
- Responsive design tested on multiple devices
- Accessibility considerations

## Contact Information in Website

- **Email**: info@theworldofmines.com
- **Phone**: +91-172-4100-5000
- **Address**: Industrial Area, Phase II, Mohali, Punjab 160055

## Notes

- Forms are fully functional with client-side validation
- All data submissions are currently logged to browser console
- For production, implement server-side processing
- Ensure all images are optimized for web use
- Test on mobile devices for best user experience

## License

Copyright © 2026 The World of Mines. All rights reserved.
