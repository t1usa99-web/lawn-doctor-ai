export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'spring-lawn-care-checklist',
    title: 'Spring Lawn Care Checklist: 10 Steps to a Healthy Lawn',
    description: 'Get your lawn ready for the growing season with this complete spring checklist covering everything from soil prep to mowing.',
    metaDescription:
      'Kickstart your lawn this spring with our 10-step checklist: soil testing, pre-emergent timing, first mow height, fertilization schedule, and more.',
    date: '2026-03-15',
    readTime: '7 min read',
    category: 'Seasonal Care',
    tags: ['spring', 'checklist', 'fertilizer', 'pre-emergent'],
    content: `<p>Spring is the most important time of year for your lawn. The steps you take (or skip) in March through May determine how your lawn performs all season. Here's a complete checklist to set your lawn up for success.</p>

<h2>1. Clean Up Winter Debris</h2>
<p>Before anything else, rake up leaves, sticks, and any matted-down grass. Debris left on the lawn blocks sunlight and traps moisture, creating perfect conditions for snow mold and other spring diseases. A thorough rake also helps stand up grass blades that were flattened over winter.</p>

<h2>2. Test Your Soil</h2>
<p>Every two to three years, send a soil sample to your local cooperative extension office. For about $15-20, you'll get a detailed breakdown of pH, nutrient levels, and specific amendment recommendations. This is the single most cost-effective thing you can do for your lawn — it prevents you from applying products you don't need and ensures you address actual deficiencies.</p>

<h2>3. Apply Pre-Emergent Herbicide</h2>
<p>Timing is everything. Pre-emergent herbicides need to be in place before crabgrass and other annual weeds germinate. The trigger is soil temperature: when soil at 4-inch depth hits 55°F for several consecutive days, it's go time. In the transition zone, this is typically mid-March to early April. In the North, late April to mid-May.</p>
<p>Important: if you plan to overseed this spring, you cannot use pre-emergent — it will prevent your grass seed from germinating too. In that case, plan to overseed in fall and use pre-emergent the following spring.</p>

<h2>4. Sharpen Your Mower Blades</h2>
<p>Dull blades tear grass instead of cutting it cleanly, leaving ragged tips that turn white or brown and invite disease. Start the season with sharp blades and plan to sharpen or replace them at least once more during the growing season.</p>

<h2>5. Set Mowing Height Correctly</h2>
<p>For the first mow of the season, you can go slightly shorter than normal to remove dead tips and let sunlight reach the crown. After that, raise to your grass type's optimal height: 3-4 inches for tall fescue and Kentucky bluegrass, 1-2 inches for Bermuda and Zoysia. Never remove more than one-third of the blade in a single mowing.</p>

<h2>6. Begin Fertilization</h2>
<p>Apply your first fertilizer application when the grass is actively growing and you've mowed at least twice. For cool-season lawns, a light spring application followed by a heavier fall program is ideal. For warm-season lawns, spring is when you start ramping up fertility as the grass breaks dormancy.</p>

<h2>7. Address Bare Spots</h2>
<p>Spring is a decent time to repair small bare areas (fall is better, but spring works). Loosen the soil, add compost, seed, and keep moist. For warm-season grasses like Bermuda, spring is actually the ideal repair window.</p>

<h2>8. Check Irrigation System</h2>
<p>Run each zone of your sprinkler system and check for broken heads, clogged nozzles, and coverage gaps. Adjust heads that are spraying sidewalks or driveways. Consider a smart sprinkler controller that adjusts watering based on weather — they can cut water use by 30-50%.</p>

<h2>9. Plan Your Grub Prevention</h2>
<p>If you had grub problems last year, mark your calendar for a preventive grub control application in late April through June (depending on your region and product). Products containing chlorantraniliprole can be applied earlier in the season and provide season-long control.</p>

<h2>10. Start Monitoring</h2>
<p>Get in the habit of walking your lawn weekly. Early detection of problems — a discolored patch, a new weed, a wet spot — is the difference between a quick fix and a costly repair. And if you spot something you can't identify? That's exactly what <a href="/">Lawn Doctor AI</a> is for — snap a photo and get an instant diagnosis.</p>`,
  },
  {
    slug: 'how-to-water-lawn-correctly',
    title: 'How to Water Your Lawn: The Complete Watering Guide',
    description: 'Most lawn problems start with incorrect watering. Learn the right frequency, depth, timing, and techniques for a healthy lawn.',
    metaDescription:
      'Watering your lawn wrong causes 80% of common problems. Learn the right time, frequency, and depth to water for a deep-rooted, drought-resistant lawn.',
    date: '2026-03-01',
    readTime: '6 min read',
    category: 'Lawn Basics',
    tags: ['watering', 'irrigation', 'drought', 'basics'],
    content: `<p>If there's one thing that separates great lawns from struggling lawns, it's watering. Most homeowners water too often and too shallowly — a habit that creates shallow roots, invites fungus, and wastes water. Here's how to do it right.</p>

<h2>The Golden Rule: Deep and Infrequent</h2>
<p>Your lawn needs about 1 to 1.5 inches of water per week (including rainfall). The key is delivering that water in 2-3 deep sessions rather than daily light sprinkles. Deep watering encourages roots to grow down into the soil, creating a more drought-resistant lawn. Shallow daily watering keeps roots near the surface where they're vulnerable to heat and drought stress.</p>

<h2>Best Time to Water</h2>
<p>Water between 4 AM and 10 AM. Early morning watering takes advantage of lower temperatures and less wind, reducing evaporation. The grass dries quickly as the sun rises, which prevents fungal disease. Afternoon watering wastes 30-50% to evaporation. Evening watering is the worst — grass stays wet all night, creating ideal conditions for fungal diseases.</p>

<h2>How to Measure</h2>
<p>Place a few empty tuna cans or rain gauges around your lawn and run your sprinklers. Time how long it takes to collect ½ inch of water. That's your benchmark — run each zone for that duration twice per week. Adjust for rainfall: if you got a good soaking rain, skip a watering cycle.</p>

<h2>Signs of Overwatering</h2>
<p>Overwatering is actually more harmful than underwatering. Watch for: mushrooms popping up in the lawn, a spongy feel when you walk, yellowing grass (from root rot), and increased disease problems. If your lawn always looks "wet" or the soil feels soggy, cut back watering frequency.</p>

<h2>Signs of Underwatering</h2>
<p>Grass that needs water will show a blue-gray tint and footprints will remain visible for minutes after you walk across it (instead of springing back immediately). If you notice these signs, water deeply within 24 hours to prevent stress damage.</p>

<h2>Adjusting for Soil Type</h2>
<p>Sandy soil drains fast and may need more frequent watering (3 times per week). Clay soil holds water longer but absorbs it slowly — if you see runoff, use a cycle-and-soak approach: water for 15 minutes, pause for 30, then water again for 15 minutes. This lets clay soil absorb the water instead of channeling it to storm drains.</p>`,
  },
  {
    slug: 'best-grass-type-for-your-region',
    title: 'Best Grass Type for Your Region: A US Lawn Guide',
    description: 'Choosing the right grass type for your climate is the foundation of a healthy lawn. Find the best match for your US region.',
    metaDescription:
      'What grass grows best where you live? Find the ideal grass type for your US region — cool-season, warm-season, or transition zone — with our complete guide.',
    date: '2026-02-15',
    readTime: '8 min read',
    category: 'Lawn Basics',
    tags: ['grass types', 'regions', 'cool-season', 'warm-season'],
    content: `<p>The #1 mistake homeowners make with their lawn isn't about fertilizer, watering, or mowing — it's growing the wrong type of grass for their climate. The right grass variety for your region will thrive with less effort, while the wrong one will struggle no matter what you do.</p>

<h2>Cool-Season Grasses (Northern US)</h2>
<p>If you live in the northern half of the US (roughly north of the I-70/I-76 corridor), cool-season grasses are your best bet. These grasses grow most actively in spring and fall when temperatures are between 60-75°F.</p>
<p><strong>Kentucky Bluegrass</strong> is the classic American lawn grass — deep blue-green color, fine texture, and excellent cold hardiness. It spreads via rhizomes, meaning it can fill in thin areas on its own. The downsides: it needs full sun (6+ hours), moderate-to-high water, and more fertilizer than other options.</p>
<p><strong>Tall Fescue</strong> is the workhorse of cool-season lawns. It's more drought-tolerant, shade-tolerant, and disease-resistant than bluegrass. Modern cultivars like Turf Type Tall Fescue have a fine texture that rivals bluegrass. It's the best choice if you want a low-maintenance cool-season lawn.</p>
<p><strong>Perennial Ryegrass</strong> germinates fast (5-7 days) and establishes quickly, making it great for overseeding and patch repair. It's often blended with bluegrass and fescue for the best of all worlds.</p>

<h2>Warm-Season Grasses (Southern US)</h2>
<p>South of the transition zone, warm-season grasses dominate. They thrive in summer heat (80-95°F) and go dormant (turn brown) in winter.</p>
<p><strong>Bermuda Grass</strong> is the king of warm-season lawns — extremely heat-tolerant, traffic-resistant, and aggressive enough to outcompete most weeds. It requires full sun and goes very brown in winter, but hybrid varieties offer excellent turf quality.</p>
<p><strong>Zoysia Grass</strong> is the premium warm-season choice. It's denser than Bermuda, more shade-tolerant, and has a beautiful carpet-like texture. It's slower to establish but requires less mowing and less water once mature.</p>
<p><strong>St. Augustine Grass</strong> is the go-to for the Gulf Coast and Florida. It has the best shade tolerance of any warm-season grass and thrives in the heat and humidity of the deep South.</p>

<h2>The Transition Zone Challenge</h2>
<p>If you live in the transition zone (roughly Virginia to Kansas, including Tennessee, Kentucky, and parts of North Carolina and Missouri), you have the toughest lawn climate in the US. It's too hot for pure cool-season stands and too cold for some warm-season grasses.</p>
<p>The best strategies for the transition zone: tall fescue (the most reliable option), Zoysia (if you can tolerate winter dormancy), or a Bermuda base overseeded with ryegrass for year-round green.</p>

<h2>Not Sure What You Have?</h2>
<p>Take a close-up photo of your grass blades and <a href="/">upload it to Lawn Doctor AI</a> — our AI can identify your grass type and provide care recommendations tailored to your specific turf.</p>`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
