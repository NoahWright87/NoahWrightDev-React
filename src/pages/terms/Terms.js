import MainContainer from "../../components/layout/MainContainer";

export default function Terms() {
    return <MainContainer
        title="Terms and conditions"
    >
        <h2>The bottom line</h2>
        <p>
            Your information is safe with me!  I'm not in the business of collecting
            personal info and using it for nefarious purposes, but some degree of
            information tracking happens in order to improve the site and recoup some of
            the costs of running the site.
        </p>

        <h2>Amazon affiliate links</h2>
        <p>
            As an Amazon Associate I earn from qualifying purchases.  If I link to a
            product on Amazon from one of my posts, know that:
        </p>
        <ol>
            <li>
                I will make some money if you buy that product (or related products,
                to some degree).
            </li>
            <li>
                I believe in the product.  I won't recommend things unless it is something
                I believe in.  Usually, it's a product I've already bought for myself.
            </li>
        </ol>

        <h2>Google Analytics and Ads</h2>
        <p>
            I use Google Analytics to track visitors so I can see who is visiting and
            why - this helps me see which posts people are engaging with so I can improve
            the site.
        </p>
        <p>
            Google Ads uses its own secret formula to decide what ads to show, hopefully
            so you see relevant stuff and not nonsense around my posts.  I don't decide
            what is in those ads, so they don't have my express endorsement, but if you
            see them it's because Google thinks they may be relevant to you.
        </p>
        <p>
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank">
                Read more about how Google uses information from this site.
            </a>
        </p>
    </MainContainer>
}