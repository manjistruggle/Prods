// subscription.js

function submitSubscription() {
    // Retrieve selected subscription type
    var subscriptionType = document.getElementById("subscriptionType").value;

    // Perform actions based on the selected subscription type
    switch (subscriptionType) {
        case "contentCreator":
            alert("You have chosen the Content Creator subscription!");
            // Perform additional actions for Content Creator subscription
            break;
        case "baseUser":
            alert("You have chosen the Base User subscription!");
            // Perform additional actions for Base User subscription
            break;
        case "freeUser":
            alert("You have chosen the Free User subscription!");
            // Perform additional actions for Free User subscription
            break;
        default:
            alert("Invalid subscription type.");
    }
}
