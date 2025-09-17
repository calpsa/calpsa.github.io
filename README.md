Official website of the University of California, Berkeley's Pakistani Student Association.

## Setup and Running Locally
1. Install dependencies: `npm install`
2. Start dev server: `npm start`
3. Open http://localhost:3000 in your browser

## Making Common Changes

### Update Images
- Logo: Replace `/src/images/logo.png`
- Hero Image: Replace `/src/images/hero.jpg`
- Board Member Photos: Add photos to `/src/images/board/` and import in `/src/pages/Board/People.js`

### Edit Board Members
In `/src/pages/Board/People.js`:
1. Add new member:
```
<div className={styles.gridItem}>
    <Card 
        firstName="Name"
        lastName="LastName"
        role="Role"
        email="email@berkeley.edu"
        avi={ImportedImage}  // Optional, remove if no photo
    />
</div>
```
2. Remove member: Delete their corresponding Card component block

### Edit FAQ Questions
To add or edit FAQ questions, modify `/src/assets/faq_data.js`:
```
{
  question: "Your Question Here?",
  answer: "Your Answer Here"
}
```
Add new questions by copying this format into the faqs array, or edit existing questions directly.

## Deployment
1. **Commit and push your changes**:
   ```bash
   # Stage all changes
   git add .
   
   # Commit with a descriptive message
   git commit -m "Description of your changes"
   
   # Push directly to main branch (it's ok)
   git push origin main
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Verify deployment**:
   - Wait 2-3 minutes for changes to propagate
   - Visit https://calpsa.org

