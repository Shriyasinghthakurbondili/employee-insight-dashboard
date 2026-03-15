# employee-insight-dashboard
A React-based Employee Insight Dashboard with authentication, employee list, employee details, and analytics visualization.

## Intentional Bug

What is the Bug?
The signature canvas does not clear when the user draws a new signature. 

Where is the Bug?
This happens in the SignatureCanvas component where the canvas drawing is implemented.

Why I chose this bug?
This bug was intentionally kept to show that the canvas should normally be cleared before capturing a new signature. 

## Virtualization Math
->This project does not implement list virtualization.
->The employee list is rendered using the standard React .map() method because the dataset is small.
->If the dataset becomes very large, virtualization techniques can be used to render only visible rows and improve performance.
