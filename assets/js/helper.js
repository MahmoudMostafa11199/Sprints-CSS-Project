//////////////////////////////////////////////////////
//
export function calculateAverageRating(ratings, ratingCount) {
  let totalScore = 0;

  for (const star in ratings) totalScore += parseInt(star) * ratings[star];

  return ratingCount > 0 ? totalScore / ratingCount : 0;
}

//////////////////////////////////////////////////////
//
export const ratingStar = (ratings, ratingCount) => {
  const averageRating = +calculateAverageRating(ratings, ratingCount).toFixed(
    1
  );
  const hasHalfStar = averageRating % 1 !== 0;
  const fullStars = Math.floor(averageRating);

  return [1, 2, 3, 4, 5]
    .map(
      (rate) => `
        <li class="relative inline-block w-6 h-6">
          <iconify-icon
            icon="ic:round-star"
            width="24"
            height="24"
            class="text-gray-400 ${
              rate <= averageRating ? 'stroke-yellow-600 text-yellow-600' : ''
            }"
          ></iconify-icon>
          ${
            hasHalfStar && rate === fullStars + 1
              ? `
                <iconify-icon 
                  icon="ic:round-star" 
                  width="24"
                  height="24"
                  class="absolute left-0 top-0 text-yellow-600"
                  style="clip-path: inset(0 50% 0 0);"
                ></iconify-icon>
          `
              : ''
          }
        </li>
  `
    )
    .join('');
};
