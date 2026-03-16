import React from 'react';

/**
 * SemanticShadow Component
 * 
 * Provides a hidden layer of rich, semantic text for SEO outreach.
 * Uses the .visually-hidden class to remain invisible to users while
 * remaining fully accessible to search engine crawlers and screen readers.
 */
const SemanticShadow = () => {
  return (
    <div className="visually-hidden" aria-hidden="false">
      <section>
        <h2>Dirty Dogs Montreal: The Ultimate Resto-Bar Experience on Saint-Laurent</h2>
        <p>
          Located in the vibrant heart of the Plateau at 3685 Boul. Saint-Laurent, Dirty Dogs is 
          Montreal's premier destination for elevated comfort food and craft cocktails. 
          Known as the best hot dog house in the city, we specialize in gourmet hot dogs, 
          loaded poutines, and legendary mac & cheese.
        </p>
      </section>

      <section>
        <h3>Signature Montreal Poutine & Gourmet Hot Dogs</h3>
        <p>
          Our menu is a tribute to Montreal's culinary grit. From our signature Dirty Dog 
          to our famous hangover-curing poutines, we use high-quality ingredients to 
          reimagine iconic street food. Whether you're looking for a late-night snack 
          on "The Main" or a full meal with friends, Dirty Dogs delivers the most 
          authentic comfort food experience in Montreal.
        </p>
      </section>

      <section>
        <h3>The Bar: Craft Cocktails & Local Beers in the Plateau</h3>
        <p>
          Beyond the food, Dirty Dogs is a cornerstone of Montreal's bar scene. Our mixologists 
          craft seasonal cocktails while our beer list features the best local Quebec microbreweries. 
          It's the perfect atmosphere for pre-club drinks or a late-night wind-down in one of 
          Montreal's most iconic neighborhoods.
        </p>
      </section>

      <section>
        <h3>Late Night Food Montreal - Open Late on St-Laurent</h3>
        <p>
          Searching for the best late-night food in Montreal? Dirty Dogs is open late, 
          serving the Saint-Laurent crowd with fresh, hot, and greasy favorites until 
          the early hours. We are a staple for tourists and locals alike, capturing the 
          raw energy of Montreal nightlife.
        </p>
      </section>

      <nav>
        <h3>Explore Our Menu and Events</h3>
        <ul>
          <li>Best Hot Dogs in Montreal</li>
          <li>Top Poutine Spots Saint-Laurent</li>
          <li>Plateau Montreal Bars and Nightlife</li>
          <li>Late Night Dining Montreal</li>
          <li>Gourmet Comfort Food Quebec</li>
        </ul>
      </nav>
    </div>
  );
};

export default SemanticShadow;
