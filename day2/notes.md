# react day2
Props, Reusable Components & Dynamic Rendering
1.props=data passed from one component to another
2.With props ✅
One component → multiple data → reuse everywhere.
3.🧠 1️⃣ What is Dynamic Rendering?
🔹 Simple definition
Dynamic rendering means UI is created from DATA, not hard-coded HTML
4.✅ What is happening?
UI is generated from array data
If data changes → UI updates automatically
Works for 3 or 3000 items
🧠 This is called dynamic rendering.
5.Purpose of App.jsx
🔹 App.jsx = ROOT COMPONENT 🌳
This is the main entry UI of your app.
In simple words:
App.jsx decides WHAT components to show and WITH WHAT data
6.Role of App.jsx
#Holds data
#Controls logic
#Passes data to child components
#Acts as parent
7.Why separate file?
Because:
#Clean code
#Reusability
#Maintainability
#Easy to update UI
8.How React updates UI internally (IMPORTANT)
When data changes:
#React creates Virtual DOM
#Compares with old Virtual DOM
#Finds difference
#Updates only changed part
#key helps in step 3.
