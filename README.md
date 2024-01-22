# Hanzehogeschool Groningen: Bioinformatics Project Year 3, Period 10
Authors: Isabella Hoftede and Mergriet van der Molen 

## Building a Web-Based Text RPG for Prospective Students

## About the Application
This documentation outlines the process involved in the creation of a web-based text Role-Playing Game (RPG) intended for prospective students during the "open day" event for the study of Bioinformatics at the Hanze University of Applied Sciences.

## Project Structure
```bash
├───.gradle
├───.idea
├───build
├───gradle
│   └───wrapper
└───src
    └───main
        ├───java
        │   └───nl
        │       └───bioinf
        │           ├───config         # Configuration files
        │           ├───game           # Game logic components
        │           ├───model          # Data model classes
        │           └───servlets        # Java servlets for handling HTTP requests
        ├───resources
        └───webapp
            ├───images                  # Image assets for the game
            ├───js                      # JavaScript files for frontend logic
            └───WEB-INF
                └───templates           # HTML templates
```

# Getting Started
To run the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/bioinformatics-project.git
```
2. Open the project in your preferred IDE or text editor.
3. Build and run the project using Gradle.

# Usage
Access the application through a web browser, Apache Tomcat is .

# Contributing
If you wish to contribute to the project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

# Acknowledgments
Hanzehogeschool Groningen, Bioinformatics Department.
Project supervisor: Marcel Kempenaar.
Feel free to reach out for questions or feedback!
