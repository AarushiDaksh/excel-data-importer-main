export const validationRules = {
    default: {
      requiredColumns: ["Name", "Amount", "Date", "Verified"],
      rules: {
        Name: { required: true },
        Amount: { required: true, min: 0 },
        Date: { required: true, withinCurrentMonth: true },
        Verified: { required: true, allowedValues: ["Yes", "No"] },
      },
    },
  };
  