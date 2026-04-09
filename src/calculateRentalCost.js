/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3 && days > 0) {
    return days * 40;
  } else if (days >= 3 && days <= 6) {
    return days * 40 - 20;
  } else if (days >= 7) {
    return days * 40 - 50;
  } else {
    return 'invalide date';
  }

  // write code here
}

module.exports = calculateRentalCost;
