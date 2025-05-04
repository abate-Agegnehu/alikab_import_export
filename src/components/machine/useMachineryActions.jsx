import { machineryCategories } from "./data";

const useMachineryActions = () => {
  const handleExploreEquipment = () => {
    const response = {
      action: "explore_equipment",
      timestamp: new Date().toISOString(),
      categories: machineryCategories.map((cat) => cat.name),
      filters: ["Type", "Power", "New/Used", "Price Range"],
    };
    console.log("Explore Equipment Action:", response);
    alert(
      `Exploring our full equipment range!\n\nAvailable categories:\n${machineryCategories
        .map((cat) => `- ${cat.name}`)
        .join("\n")}\n\nUse filters to narrow your search.`
    );
  };

  const handleContactTeam = () => {
    const response = {
      action: "contact_team",
      timestamp: new Date().toISOString(),
      contactOptions: [
        "Call: +1 (800) 555-6789",
        "Email: sales@machineryequip.com",
        "Live chat",
        "Local dealer locator",
      ],
      responseTime: "Within 2 business hours",
    };
    console.log("Contact Team Action:", response);
    alert(
      `Connecting you with our machinery specialists!\n\nContact options:\n- Call: +1 (800) 555-6789\n- Email: sales@machineryequip.com\n- Live chat\n- Local dealer locator\n\nWe'll respond within 2 business hours.`
    );
  };

  const handleCategoryClick = (categoryName, categoryId) => {
    const response = {
      action: "view_category",
      category: categoryName,
      categoryId: categoryId,
      productsAvailable: 25,
      viewOptions: ["Specs", "Videos", "3D Models", "Compare"],
    };
    console.log("Category View Action:", response);
    alert(
      `Showing ${categoryName} equipment!\n\nView options:\n- Detailed specifications\n- Video demonstrations\n- 3D models\n- Comparison tool\n\nWe have ${response.productsAvailable} options available.`
    );
  };

  const handleRequestQuote = () => {
    const response = {
      action: "request_quote",
      timestamp: new Date().toISOString(),
      requiredInfo: [
        "Equipment type",
        "Quantity",
        "Delivery location",
        "Timeframe",
      ],
      quoteValidity: "30 days",
    };
    console.log("Quote Request Action:", response);
    alert(
      `Preparing your equipment quote!\n\nPlease provide:\n- Equipment type\n- Quantity needed\n- Delivery location\n- Required timeframe\n\nQuotes are valid for 30 days.`
    );
  };

  const handleScheduleDemo = (equipmentType = "") => {
    const response = {
      action: "schedule_demo",
      equipment: equipmentType || "General equipment",
      demoOptions: ["Virtual tour", "On-site demo", "Dealer location visit"],
      preparation: [
        "Site details",
        "Specific requirements",
        "Operator experience level",
      ],
    };
    console.log("Demo Request Action:", response);
    alert(
      `Scheduling ${
        equipmentType ? equipmentType + " " : ""
      }demo!\n\nOptions:\n- Virtual equipment tour\n- On-site demonstration\n- Visit dealer location\n\nPlease have your site details ready.`
    );
  };

  return {
    handleExploreEquipment,
    handleContactTeam,
    handleCategoryClick,
    handleRequestQuote,
    handleScheduleDemo,
  };
};

export default useMachineryActions;
