export interface LawnProblem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  severity: 'low' | 'moderate' | 'severe';
  icon: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  preventionTips: string[];
  whenToSeeAPro: string;
  seasonalInfo: string;
  content: string; // long-form SEO content in HTML
}

export const lawnProblems: LawnProblem[] = [
  {
    slug: 'brown-patches',
    title: 'Brown Patches on Your Lawn: Causes, Treatment & Prevention',
    shortTitle: 'Brown Patches',
    description: 'Brown patches are one of the most common lawn problems in the US. Learn what causes them and how to fix them.',
    metaDescription:
      'Brown patches on your lawn? Learn the top causes — from fungal disease to drought stress — and how to treat and prevent brown spots in your grass.',
    severity: 'moderate',
    icon: '🟤',
    symptoms: [
      'Circular or irregular brown spots ranging from a few inches to several feet',
      'Grass blades that pull up easily at the edges of patches',
      'Dark, water-soaked appearance at the borders of affected areas in the morning',
      'Thin, wilted grass that doesn\'t recover with watering',
    ],
    causes: [
      'Brown Patch Fungus (Rhizoctonia solani) — thrives in hot, humid weather above 80°F with nighttime temps above 60°F',
      'Drought stress from inconsistent or inadequate watering',
      'Over-fertilization, especially with high-nitrogen fertilizers in summer',
      'Compacted soil that prevents water and air from reaching roots',
      'Dull mower blades tearing grass instead of cutting cleanly',
    ],
    treatments: [
      'Apply a fungicide containing azoxystrobin or propiconazole if fungal disease is confirmed',
      'Water deeply but infrequently — aim for 1 inch per week, applied early in the morning',
      'Raise your mowing height to 3-4 inches to reduce stress on grass',
      'Aerate compacted soil to improve drainage and air circulation',
      'Avoid fertilizing during active disease — wait until the lawn recovers',
    ],
    preventionTips: [
      'Water in the early morning (before 10 AM) so grass dries during the day',
      'Maintain sharp mower blades and never cut more than ⅓ of the grass blade at once',
      'Improve air circulation by pruning overhanging trees and shrubs',
      'Apply a balanced slow-release fertilizer in fall instead of heavy summer feeding',
      'Overseed thin areas in fall with disease-resistant grass varieties',
    ],
    whenToSeeAPro:
      'If brown patches keep returning despite treatment, cover more than 25% of your lawn, or you see signs of insect damage (grubs, chinch bugs), consult a lawn care professional for a soil test and targeted treatment plan.',
    seasonalInfo:
      'Brown patch fungus is most active from late spring through early fall, especially in the Southeast and Transition Zone. Drought-related brown patches peak in July and August across most of the US.',
    content: `<p>Brown patches are the #1 reason homeowners search for lawn help online — and for good reason. They're unsightly, they spread quickly, and they can have half a dozen different causes. The good news is that most brown patches are very treatable once you identify the root cause.</p>
<h2>Is It Fungal or Drought?</h2>
<p>The most important first step is figuring out whether your brown patch is caused by a fungal disease or simple drought stress. A fungal brown patch typically appears as a circular or ring-shaped area with a dark "smoke ring" border visible in the early morning dew. Drought stress, on the other hand, tends to create irregular patches that follow the contours of your yard's high spots or areas farthest from your sprinkler heads.</p>
<p>Try the "tug test" — grab a handful of grass at the edge of a brown patch and pull gently. If the blades slide out easily from the crown, fungus is likely damaging the sheaths. If the grass holds firm but is simply dry and crispy, you're dealing with drought.</p>
<h2>Treatment Strategy</h2>
<p>For fungal brown patch, the combination of proper cultural practices and targeted fungicide application is most effective. Reduce watering frequency (not depth), mow at the highest recommended setting for your grass type, and apply a contact or systemic fungicide if the disease is actively spreading.</p>
<p>For drought stress, the fix is adjusting your irrigation. Water deeply (to a depth of 6 inches) two to three times per week rather than lightly every day. Early morning watering reduces evaporation and doesn't leave grass wet overnight, which would actually invite fungal problems.</p>`,
  },
  {
    slug: 'lawn-fungus',
    title: 'Lawn Fungus: How to Identify, Treat & Prevent Common Lawn Diseases',
    shortTitle: 'Lawn Fungus',
    description: 'Identify common lawn fungus diseases like dollar spot, rust, and fairy rings, plus proven treatment methods.',
    metaDescription:
      'Lawn fungus ruining your yard? Learn to identify dollar spot, rust, powdery mildew, and other common lawn diseases — plus how to treat and prevent them.',
    severity: 'moderate',
    icon: '🍄',
    symptoms: [
      'White, powdery coating on grass blades (powdery mildew)',
      'Small, silver-dollar-sized straw-colored spots (dollar spot)',
      'Orange or yellow powder on shoes after walking through grass (rust)',
      'Dark green circles or arcs of mushrooms (fairy rings)',
      'Pinkish-red thread-like strands on grass tips (red thread)',
    ],
    causes: [
      'Prolonged moisture on grass blades from overwatering or evening irrigation',
      'Poor air circulation due to shade, fencing, or dense landscaping',
      'Nutrient deficiency, especially low nitrogen levels',
      'Soil compaction reducing drainage',
      'Thatch buildup over ½ inch thick creating a humid microenvironment for fungi',
    ],
    treatments: [
      'Identify the specific fungus before treating — different diseases require different fungicides',
      'For dollar spot: apply nitrogen fertilizer and water deeply in the morning',
      'For rust: mow frequently to remove infected tips, bag clippings, and fertilize',
      'For powdery mildew: improve sunlight exposure and air circulation; apply fungicide only for severe cases',
      'For fairy rings: aerate through the ring, water deeply, and apply a soil surfactant to break hydrophobic soil',
    ],
    preventionTips: [
      'Water between 6 AM and 10 AM — never in the evening',
      'Dethatch when thatch layer exceeds ½ inch',
      'Aerate at least once per year (fall for cool-season grass, late spring for warm-season)',
      'Follow a balanced fertilization schedule based on a soil test',
      'Choose disease-resistant grass cultivars when overseeding or establishing a new lawn',
    ],
    whenToSeeAPro:
      'If you can\'t identify the specific fungus, if the disease has spread rapidly across a large area, or if over-the-counter fungicides haven\'t worked after two applications, a lawn care professional can take samples for lab analysis and prescribe targeted treatment.',
    seasonalInfo:
      'Different fungi peak at different times: dollar spot in late spring/early summer, brown patch in mid-summer, rust in late summer/fall, and snow mold in winter/early spring.',
    content: `<p>Lawn fungus is incredibly common — most lawns will deal with at least one fungal disease at some point. The key is catching it early and understanding that treating the symptom (the visible fungus) without fixing the underlying cultural problem (usually moisture-related) means it will keep coming back.</p>
<h2>The Most Common Lawn Fungi in the US</h2>
<p>Dollar spot is the most widespread lawn disease in the United States, affecting virtually all grass types. It thrives when nights are cool and dewy and nitrogen is low. Rust is another common one — you'll know it because your shoes turn orange after walking across the lawn. It looks alarming but is usually cosmetic and resolves on its own with proper fertilization and mowing.</p>
<p>Brown patch and large patch are the big concerns for homeowners because they can devastate large areas quickly in hot, humid conditions. These require prompt treatment with a systemic fungicide to halt spread.</p>
<h2>The Cultural Fix Is the Real Fix</h2>
<p>Fungicides are a band-aid — they stop active disease but don't prevent recurrence. The real solution is fixing the conditions that invite fungus: watering habits, mowing height, fertility, and drainage. Getting your lawn on a proper cultural program will do more to prevent fungus than any chemical treatment.</p>`,
  },
  {
    slug: 'crabgrass-weeds',
    title: 'Crabgrass & Weed Control: How to Kill and Prevent Lawn Weeds',
    shortTitle: 'Crabgrass & Weeds',
    description: 'Get rid of crabgrass, dandelions, clover, and other lawn weeds with proven pre-emergent and post-emergent strategies.',
    metaDescription:
      'Crabgrass taking over your lawn? Learn the best pre-emergent timing, post-emergent herbicides, and cultural practices to eliminate weeds for good.',
    severity: 'moderate',
    icon: '🌿',
    symptoms: [
      'Light green, coarse-textured grass spreading flat along the ground (crabgrass)',
      'Bright yellow flowers scattered through the lawn (dandelions)',
      'Low-growing, clover-like plants with white or pink flowers',
      'Patches of different-colored or different-textured grass mixed in',
      'Lawn thinning as weeds outcompete desirable grass',
    ],
    causes: [
      'Bare or thin spots in the lawn that allow weed seeds to germinate',
      'Mowing too short, which weakens grass and gives weeds sunlight to establish',
      'Skipping pre-emergent herbicide application in spring',
      'Compacted soil that favors weeds over desirable grass',
      'Over- or under-watering creating stressed turf that can\'t compete',
    ],
    treatments: [
      'Apply pre-emergent herbicide in early spring when soil temps reach 55°F (before crabgrass germinates)',
      'Use a selective post-emergent herbicide (like quinclorac for crabgrass or 2,4-D for broadleaf weeds) on active weeds',
      'Hand-pull weeds when populations are small — get the entire root',
      'For severe crabgrass: apply a post-emergent in early summer when plants are young (1-3 tillers)',
      'Overseed in fall to thicken the lawn and crowd out future weeds naturally',
    ],
    preventionTips: [
      'Keep grass thick and healthy — a dense lawn is the best weed prevention',
      'Mow at 3-4 inches to shade the soil and prevent weed seed germination',
      'Apply pre-emergent herbicide on schedule every spring',
      'Don\'t leave bare soil exposed — seed or sod any thin areas promptly',
      'Maintain proper soil pH (6.0-7.0 for most grass types) with lime or sulfur as needed',
    ],
    whenToSeeAPro:
      'If weeds cover more than 30-40% of your lawn, it may be more cost-effective to consult a professional for a comprehensive weed-and-feed program or even a lawn renovation rather than spot-treating individual weeds.',
    seasonalInfo:
      'Pre-emergent timing is critical — apply when soil temperatures at 4-inch depth consistently reach 55°F, typically March-April in the South and April-May in the North. Fall is the second key window for broadleaf weed control.',
    content: `<p>Weeds are the most visible sign that something is off with your lawn's health. While it's tempting to reach straight for the herbicide, understanding why weeds are thriving is the key to long-term control.</p>
<h2>Pre-Emergent vs. Post-Emergent</h2>
<p>Pre-emergent herbicides create a chemical barrier in the top layer of soil that prevents weed seeds from successfully germinating. They must be applied BEFORE the target weed germinates — once you can see crabgrass, pre-emergent is too late for that season. Post-emergent herbicides kill weeds that are already actively growing.</p>
<p>The most effective weed control programs use both: pre-emergent in spring to prevent annual weeds like crabgrass, and targeted post-emergent applications as needed during the growing season for any breakthrough weeds.</p>
<h2>The Thick Lawn Approach</h2>
<p>The single most effective weed control strategy is maintaining a thick, healthy lawn. Grass that is mowed high (3-4 inches), properly fertilized, and watered correctly will naturally shade out weed seeds and outcompete weeds for nutrients and water. Many lawns that struggle with weeds are simply being mowed too short.</p>`,
  },
  {
    slug: 'yellow-grass',
    title: 'Why Is My Grass Turning Yellow? Causes & How to Fix It',
    shortTitle: 'Yellow Grass',
    description: 'Yellow grass can signal nutrient deficiency, overwatering, or lawn disease. Learn the common causes and how to restore green color.',
    metaDescription:
      'Yellow grass? Learn whether it\'s nitrogen deficiency, iron chlorosis, overwatering, or disease — and the specific fix for each cause to get your lawn green again.',
    severity: 'low',
    icon: '💛',
    symptoms: [
      'Uniform yellowing across the entire lawn (often nitrogen deficiency)',
      'Yellow patches with green veins on individual blades (iron chlorosis)',
      'Yellow, soggy areas that stay wet (overwatering)',
      'Yellow tips on grass blades (mower damage or fertilizer burn)',
      'Gradual yellowing starting in shaded areas (insufficient sunlight)',
    ],
    causes: [
      'Nitrogen deficiency — the #1 cause of yellow lawns',
      'Iron chlorosis from high soil pH (above 7.0) preventing iron absorption',
      'Overwatering leading to shallow roots and poor nutrient uptake',
      'Dull mower blades shredding grass tips',
      'Dog urine spots from high nitrogen concentration',
    ],
    treatments: [
      'Apply a nitrogen-rich fertilizer (look for a high first number like 24-0-6) for general yellowing',
      'For iron chlorosis: apply chelated iron (liquid iron spray provides fastest green-up)',
      'Reduce watering frequency and check that sprinklers are distributing evenly',
      'Sharpen mower blades — replace them if they can\'t hold an edge',
      'For dog spots: flush the area with water immediately after, and train dogs to use a designated area',
    ],
    preventionTips: [
      'Follow a 4-step fertilization program (early spring, late spring, summer, fall)',
      'Test your soil every 2-3 years and adjust pH if needed',
      'Water deeply 2-3 times per week rather than shallowly every day',
      'Sharpen mower blades at least twice per season',
      'Ensure your grass type matches your yard\'s sun/shade conditions',
    ],
    whenToSeeAPro:
      'If yellowing persists after fertilization and watering adjustments, a soil test from a professional or your local cooperative extension can reveal specific nutrient deficiencies or pH issues that need correction.',
    seasonalInfo:
      'Yellowing from nitrogen deficiency is most common in early spring (before first fertilization) and mid-summer (when warm-season grasses are actively growing). Iron chlorosis tends to be worst in spring on alkaline soils.',
    content: `<p>A yellow lawn is your grass sending a distress signal — but the good news is that the cause is usually straightforward and the fix is often simple.</p>
<h2>The Nitrogen Test</h2>
<p>The vast majority of yellow lawns in the US are simply hungry. If your lawn is uniformly yellow-green rather than the deep green you want, nitrogen is almost certainly the issue. A quality lawn fertilizer applied at the right time of year will typically produce visible green-up within 5-7 days.</p>
<h2>When It's Not Nitrogen</h2>
<p>If specific patches are yellow while the rest of the lawn is green, or if the yellowing has a distinct pattern, other causes are more likely. Iron chlorosis shows as yellow tissue between green leaf veins — this is common in areas with alkaline water or naturally high-pH soil. Overwatering creates yellow, mushy areas, often in low spots or near sprinkler heads with overlap.</p>`,
  },
  {
    slug: 'bare-spots',
    title: 'How to Fix Bare Spots in Your Lawn: Repair & Prevention Guide',
    shortTitle: 'Bare Spots',
    description: 'Repair bare spots in your lawn caused by foot traffic, pet damage, disease, or poor drainage with this step-by-step guide.',
    metaDescription:
      'Bare spots ruining your lawn? Learn step-by-step how to repair bare patches with seeding, sodding, and soil prep — plus how to prevent them from returning.',
    severity: 'low',
    icon: '🕳️',
    symptoms: [
      'Patches of exposed dirt with no grass growing',
      'Thin, sparse grass that never fills in',
      'Bare trails along common foot traffic paths',
      'Areas under trees or in heavy shade where grass won\'t establish',
      'Spots where grass was killed by chemicals, gas spills, or pet urine',
    ],
    causes: [
      'Heavy foot traffic or pet activity compacting soil',
      'Grub or insect damage destroying grass roots',
      'Disease or fungus that killed grass in patches',
      'Insufficient sunlight (less than 4 hours for most grass types)',
      'Poor soil quality, drainage issues, or chemical spills',
    ],
    treatments: [
      'Rake out dead grass and debris, then loosen the top 2-3 inches of soil',
      'Add a thin layer (¼ inch) of compost or topsoil to improve seed-to-soil contact',
      'Spread grass seed at 1.5x the recommended rate for your grass type',
      'Cover lightly with straw mulch to retain moisture and protect seed',
      'Water lightly 2-3 times daily until seed germinates (7-21 days depending on grass type)',
    ],
    preventionTips: [
      'Install stepping stones or pavers in high-traffic areas',
      'Apply grub preventive (like GrubEx) in late spring',
      'Choose shade-tolerant grass varieties for areas under trees',
      'Aerate annually to prevent soil compaction',
      'Overseed the entire lawn in fall to maintain thick, resilient turf',
    ],
    whenToSeeAPro:
      'If bare spots keep reappearing in the same locations after repair, the underlying cause may be drainage issues, severe compaction, or soil contamination that requires professional diagnosis.',
    seasonalInfo:
      'Fall (September-October) is the ideal time to repair bare spots in cool-season lawns. For warm-season grasses like Bermuda or Zoysia, late spring through early summer is best.',
    content: `<p>Bare spots are not just ugly — they're an open invitation for weeds. Every square inch of bare soil in your lawn is a potential germination site for crabgrass, dandelions, and other weeds. Repairing bare spots promptly is one of the best investments you can make in your lawn's long-term health.</p>
<h2>The Repair Process</h2>
<p>Successful spot repair comes down to seed-to-soil contact and moisture. Start by clearing all dead material and loosening the soil. Spread seed generously — bare spot repair calls for heavier seeding rates than a general overseed. A thin layer of compost on top will help retain moisture and give seeds the nutrients they need to establish quickly.</p>
<h2>Timing Matters</h2>
<p>For cool-season grasses (Kentucky bluegrass, fescue, ryegrass), early fall is the sweet spot — warm soil temperatures speed germination while cooler air temperatures reduce stress on young seedlings. For warm-season grasses, late spring gives new grass the full growing season to establish before winter dormancy.</p>`,
  },
  {
    slug: 'grub-damage',
    title: 'Lawn Grubs: How to Detect, Treat & Prevent Grub Damage',
    shortTitle: 'Grub Damage',
    description: 'White grubs eating your lawn roots? Learn the signs of grub damage and the best treatments to save your grass.',
    metaDescription:
      'Spongy lawn that peels up like carpet? You likely have grubs. Learn how to test for grubs, the best treatment products, and when to apply grub preventive.',
    severity: 'severe',
    icon: '🐛',
    symptoms: [
      'Grass that feels spongy underfoot and peels up like a carpet',
      'Irregular brown patches that don\'t respond to watering',
      'Increased animal activity — skunks, raccoons, or birds digging in the lawn',
      'White, C-shaped larvae visible when you pull back the turf',
      'Grass that has no roots when you pull it up',
    ],
    causes: [
      'Japanese beetles, June bugs, or European chafer beetles laying eggs in the lawn',
      'Eggs hatch into white grub larvae that feed on grass roots in late summer and fall',
      'Well-watered, irrigated lawns attract egg-laying beetles in June-July',
      'Lack of preventive grub control application',
      'Lawns with thin turf or sandy soil are more susceptible to damage',
    ],
    treatments: [
      'Confirm grubs: cut a 1-sq-ft section of turf and peel back — more than 10 grubs per sq ft requires treatment',
      'For active grubs (Aug-Oct): apply a curative product containing trichlorfon (Dylox) or carbaryl (Sevin)',
      'Water in the treatment immediately with ½ inch of irrigation',
      'For biological control: apply beneficial nematodes (Heterorhabditis bacteriophora) to soil',
      'Reseed damaged areas after grub population is controlled',
    ],
    preventionTips: [
      'Apply preventive grub control (chlorantraniliprole or imidacloprid) in late spring to early summer',
      'Chlorantraniliprole (GrubEx) can be applied April-June and lasts all season',
      'Let the lawn go slightly dry in June-July to make it less attractive to egg-laying beetles',
      'Maintain thick turf to withstand low-level grub feeding without visible damage',
      'Milky spore applied to soil provides long-term biological Japanese beetle grub control',
    ],
    whenToSeeAPro:
      'If grubs have destroyed large sections of your lawn, a professional can assess the extent of damage, apply targeted curative treatments, and plan a restoration that includes re-grading, soil amendment, and re-establishment of turf.',
    seasonalInfo:
      'Grub damage is most visible in late August through October and again in April-May. Preventive products must be applied BEFORE eggs hatch (June-July). Curative products work best when grubs are small, in August-September.',
    content: `<p>Grub damage is one of the most destructive lawn problems because by the time you notice it, the roots are already gone. The classic sign is turf that rolls up like a rug — there are literally no roots holding it to the soil.</p>
<h2>The Grub Test</h2>
<p>Before treating, confirm you actually have a grub problem. Cut three 1-square-foot sections of turf in the affected area and peel them back. Count the grubs (white, C-shaped larvae about the size of your thumb). A healthy lawn can tolerate up to 5-8 grubs per square foot. Treatment is recommended when counts exceed 10 per square foot.</p>
<h2>Prevention Is Key</h2>
<p>The most effective grub management strategy is preventive rather than curative. Products containing chlorantraniliprole (the active ingredient in GrubEx) can be applied anytime from April through June and will kill grubs as they hatch from eggs later in the summer. Once grubs are large and actively feeding in September-October, curative products are needed — and they're less effective than preventive application.</p>`,
  },
];

export function getProblemBySlug(slug: string): LawnProblem | undefined {
  return lawnProblems.find((p) => p.slug === slug);
}
