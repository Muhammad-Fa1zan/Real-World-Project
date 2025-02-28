const employee = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": "T1-001",
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design",
                "status": "pending",
                "priority": "Low"
            },
            {
                "taskId": "T1-002",
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting",
                "status": "complete",
                "priority": "Low"
            },
            {
                "taskId": "T1-003",
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development",
                "status": "pending",
                "priority": "Medium"
            },
            {
                "taskId": "T1-004",
                "taskTitle": "Write report",
                "taskDescription": "Summarize project progress",
                "taskDate": "2024-10-15",
                "category": "Documentation",
                "status": "complete",
                "priority": "Low"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": "T2-001",
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database",
                "status": "pending",
                "priority": "Medium"
            },
            {
                "taskId": "T2-002",
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design",
                "status": "complete",
                "priority": "Low"
            },
            {
                "taskId": "T2-003",
                "taskTitle": "Update security policies",
                "taskDescription": "Revise and update security protocols",
                "taskDate": "2024-10-16",
                "category": "Security",
                "status": "complete",
                "priority": "High"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskId": "T3-001",
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation",
                "status": "pending",
                "priority": "Medium"
            },
            {
                "taskId": "T3-002",
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development",
                "status": "pending",
                "priority": "Medium"
            },
            {
                "taskId": "T3-003",
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA",
                "status": "complete",
                "priority": "Medium"
            },
            {
                "taskId": "T3-004",
                "taskTitle": "Bug fixing",
                "taskDescription": "Resolve critical security vulnerabilities",
                "taskDate": "2024-10-17",
                "category": "Development",
                "status": "failed",
                "priority": "High"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": "T4-001",
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation",
                "status": "pending",
                "priority": "Low"
            },
            {
                "taskId": "T4-002",
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps",
                "status": "pending",
                "priority": "Medium"
            },
            {
                "taskId": "T4-003",
                "taskTitle": "Team training",
                "taskDescription": "Conduct a workshop on best coding practices",
                "taskDate": "2024-10-18",
                "category": "Training",
                "status": "complete",
                "priority": "Low"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskId": "T5-001",
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design",
                "status": "pending",
                "priority": "Low"
            },
            {
                "taskId": "T5-002",
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps",
                "status": "complete",
                "priority": "Medium"
            },
            {
                "taskId": "T5-003",
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support",
                "status": "pending",
                "priority": "Low"
            },
            {
                "taskId": "T5-004",
                "taskTitle": "Server maintenance",
                "taskDescription": "Perform scheduled maintenance on production servers",
                "taskDate": "2024-10-19",
                "category": "IT Support",
                "status": "failed",
                "priority": "High"
            }
        ]
    }
  ];
  


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

const AllData = () => {
  return {employee, admin};
};

export default AllData;
