import React from 'react';
import Title from 'src/components/atom/title/Title';
import style from 'src/pages/aboutMe/aboutme.css';
import perso from 'src/assets/images/avatar.svg';

const AboutMe = () => {
    return (
        <div>
            <Title id={"contact"} titre={"A Propos de moi"} />
            <div className="h-screen">
                <img src={perso} className="shapePerso w-104" alt="" />

                <div className="text-white">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Eu augue ut lectus arcu bibendum at. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed libero enim sed faucibus. Rutrum quisque non tellus orci ac auctor augue mauris augue. Senectus et netus et malesuada fames ac turpis egestas. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Massa tincidunt nunc pulvinar sapien. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Lacinia quis vel eros donec ac. Habitasse platea dictumst quisque sagittis purus sit.

Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Id donec ultrices tincidunt arcu non sodales neque sodales. Vitae turpis massa sed elementum tempus egestas sed. Arcu bibendum at varius vel pharetra vel turpis nunc. Amet commodo nulla facilisi nullam. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Proin sed libero enim sed faucibus turpis in. Urna condimentum mattis pellentesque id. Aliquam id diam maecenas ultricies mi eget. Elementum eu facilisis sed odio morbi quis commodo odio. Viverra vitae congue eu consequat ac felis donec et. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Quis eleifend quam adipiscing vitae proin. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Molestie nunc non blandit massa enim nec. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Phasellus egestas tellus rutrum tellus pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.
<br/>Sed augue lacus viverra vitae Suspendisse sed nisi lacus sed viverra tellus in hac. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum fusce ut placerat orci nulla pellentesque. Diam maecenas sed enim ut sem viverra aliquet eget. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Turpis massa sed elementum tempus egestas sed. Sit amet consectetur adipiscing elit. Convallis posuere morbi leo urna molestie at elementum eu. Morbi quis commodo odio aenean sed adipiscing diam donec. Mi quis hendrerit dolor magna.
</p>
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;