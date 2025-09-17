CAL PSA WEBSITE ©2023

## Setup and Running Locally
To get the project running on your computer, use your **terminal** or **command prompt** to follow these steps:

1. Download the project from GitHub and open it in an IDE (like Visual Studio Code).
```bash
git clone https://github.com/calpsa/calpsa.github.io.git
```
2. Open a terminal in the IDE.
3. Install dependencies: `npm install`
4. Start dev server: `npm start`
5. Open http://localhost:3000 in your browser

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

## Deploying Changes
This section explains how to save and publish your changes to the live website on GitHub Pages. 🚀

### 1. Commit and Push Your Changes
To save your local changes to the main branch, you'll first need to use Git commands. These commands stage your changes, create a new commit, and then push that commit to the remote repository.

* **Stage all changes:** This command stages **all** modified and new files for the next commit.
    ```bash
    git add .
    ```
* **Create a commit:** A commit is a snapshot of your repository at a specific point in time. The `git commit` command creates a new commit, and the `-m` flag allows you to add a descriptive message. Make your message clear and concise, summarizing the changes you made (e.g., "Updated board members and fixed typos").
    ```bash
    git commit -m "Your descriptive message here"
    ```
* **Push to the main branch:** The `git push` command sends your committed changes from your local repository to the remote repository on GitHub.
    ```bash
    git push origin main
    ```
---
### 2. Deploy Changes to GitHub Pages
Once your changes are pushed to the main branch, you can deploy the website. This process builds the project and publishes it to GitHub Pages.

* **Run the deploy script:** The `npm run deploy` command executes a script that builds the production version of the site and pushes it to the `gh-pages` branch. This is the branch GitHub Pages uses to serve the website.
    ```bash
    npm run deploy
    ```
---
### 3. Verify Deployment
After running the deploy command, you'll need to wait for the changes to go live. View the live changes at http://calpsa.org
