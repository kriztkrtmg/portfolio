import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function BodyContainer({theme, mode}) {
    return (
        <React.Fragment>
            <Grid container className='contain_body' spacing={0}>
                <Grid item xs={12} sm={6} className='my_profile'>
                    <div className='my_photo'></div>
                    <div className='my_data'>
                        <Typography variant="h4" gutterBottom>Christopher Thokar</Typography>
                        <Typography variant="button" display="block" gutterBottom>Frontend Developer</Typography>
                        <Typography variant="subtitle2" gutterBottom>Javascript, ReactJs, Python, Material-UI, CSS, BootStrap, GIT</Typography>
                        <div className={`social_contact ${mode && "social_contact_mode"}`}>
                            <a
                                href="https://www.facebook.com/kriztkrtmg"
                                target="blank"
                            ><FacebookIcon className={`social_icon ${mode && "social_icon_mode"}`}/>
                            </a>
                            <a
                                href="https://github.com/kriztkrtmg"
                                target="blank"
                            ><GitHubIcon className={`social_icon ${mode && "social_icon_mode"}`} />
                            </a>
                            <a
                                href="https://www.instagram.com/kriztkrtmg/"
                                target="blank"
                            ><InstagramIcon className={`social_icon ${mode && "social_icon_mode"}`}/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/christopher-thokar-831700135/"
                                target="blank"
                            ><LinkedInIcon className={`social_icon ${mode && "social_icon_mode"}`}/>
                            </a>  
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className='description_content'>
                    <Typography variant="h4" gutterBottom>About</Typography>
                    <div className='description_paragraph'>
                            I did my graduation in BE.Computer from Kantipur Engineering College.
                            Besides my formal education, I have good and basic knowledge in HTML, CSS, BootStrap, GIT and GitHub,
                            Javascript, ReactJs, Material-UI and Python. I want to learn more and grow my skills so that
                            I can also be relied upon to help the company to achieve its goal.
                            <br/>
                            I am currently pursuing my career in frontEnd Developer.
                            This webpage is build by implementing ReactJs (mostly including functional Component and Hooks), Material-UI and CSS.
                        
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default BodyContainer
