
// we can remove the values from union type


type statusType = "pending" | "completed" | "failed";

let statuss :Exclude<statusType,'pending'>  = "completed"