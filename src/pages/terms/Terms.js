import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";

// TODO: Use Typography instead of straight up HTML
export default function Terms() {
    return <MainContainer
        title="Terms and conditions"
    >
        <Typography
            variant="h2"
        >
            The bottom line
        </Typography>

                <Typography variant="body1">
                    Your information is safe with me!  I'm not in the business of collecting
                    personal info and using it for nefarious purposes, but some degree of
                    information tracking happens in order to improve the site and recoup some of
                    the costs of running the site.
                </Typography>

                <Typography variant="h2">
                    Amazon affiliate links
                </Typography>
                <Typography variant="body1">
                    As an Amazon Associate I earn from qualifying purchases.  If I link to a
                    product on Amazon from one of my posts, know that:
                </Typography>
                <ol>
                    <li>
                        <Typography variant="body1">
                            I will make some money if you buy that product (or related products,
                            to some degree).
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            I believe in the product.  I won't recommend things unless it is something
                            I believe in.  Usually, it's a product I've already bought for myself.
                        </Typography>
                    </li>
                </ol>

                <Typography variant="h2">
                    Google Analytics and Ads
                </Typography>
                <Typography variant="body1">
                    I use Google Analytics to track visitors so I can see who is visiting and
                    why - this helps me see which posts people are engaging with so I can improve
                    the site.
                </Typography>
                <Typography variant="body1">
                    Google Ads uses its own secret formula to decide what ads to show, hopefully
                    so you see relevant stuff and not nonsense around my posts.  I don't decide
                    what is in those ads, so they don't have my express endorsement, but if you
                    see them it's because Google thinks they may be relevant to you.
                </Typography>
                <Typography variant="body1">

                    <Link
                        to="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        component={RouterLink}>
                        Read more about how Google uses information from this site.
                    </Link>
                </Typography>
            </MainContainer>
        }
