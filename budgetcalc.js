const budgetForm = document.getElementById("budget-form");
const budgetResult = document.getElementById("budget-result");

budgetForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let currentIncome = parseInt(document.getElementById("current-income").value);
    let monthlyExpenses = parseInt(document.getElementById("monthly-expenses").value);
    let monthlyBills = parseInt(document.getElementById("monthly-bills").value);
    let financialGoal = parseInt(document.getElementById("financial-goal").value);
    let monthsToSave = parseInt(document.getElementById("months-to-save").value);

    const calculateBudget = () => {
        budget = currentIncome - monthlyExpenses - monthlyBills;
        savings = budget - monthlyExpenses;
        return budget;
    };

    const recommendPlan = () => {
        budgetResult.innerHTML = `Based on your current income of $${currentIncome} and monthly expenses of $${monthlyExpenses} and bills of $${monthlyBills}, your budget is $${budget}.` + `<br>` +
                                `To reach your financial goal of $${financialGoal} in ${monthsToSave} months, you will need to save $${financialGoal / monthsToSave} per month.`;
    };

    calculateBudget();
    recommendPlan();
});
