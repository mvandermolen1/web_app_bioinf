# Hanzehogeschool Groningen: Bioinformatics Project Year 3, Period 10
Authors: Isabella Hofstede and Margriet van der Molen 

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
2. Open the project in your preferred IDE or text editor. (Recommended to use JetBrains IntelliJ IDEA with Java SDK 17.)
3. Build and run the project using Gradle. 
4. In IntelliJ a project with Gradle structure should be created from the repository directory.

# Usage
Access the application through a web browser, by using Apache Tomcat (v9.0.85). Refer to the Gitbook provided by Michiel Nobak in the "useful links" section. 

# Useful links
https://michielnoback.github.io/java_book/05_web/first_project.html

# Contributing
If you wish to contribute to the project, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

# Acknowledgments
Hanzehogeschool Groningen, Bioinformatics Department.

Project supervisor: Marcel Kempenaar.

Feel free to reach out for questions or feedback!
