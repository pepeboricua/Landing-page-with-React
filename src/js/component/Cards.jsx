import React from "react";

export const Cards = (props) => {
  const style = {
    width: props.width ? props.width : "18rem",
  };
  return (
    <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw1AxygQqdHtr_HQN-A1Xrjz&ust=1676682073884000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCchM2tm_0CFQAAAAAdAAAAABAE"
              className="img-thumbnail"
              alt="Logo"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              Card Title
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper tellus nunc, vitae ultricies elit facilisis eleifend. Fusce imperdiet sed felis sed lobortis. Fusce cursus suscipit orci vitae maximus. Nullam tristique orci blandit, porta nisl id, volutpat urna. Vestibulum bibendum est nec elit interdum, eu vestibulum metus convallis.
            </p>
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
            >
             Find out more!
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw1AxygQqdHtr_HQN-A1Xrjz&ust=1676682073884000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCchM2tm_0CFQAAAAAdAAAAABAE"
              className="img-thumbnail"
              alt="Logo"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              Card Title
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper tellus nunc, vitae ultricies elit facilisis eleifend. Fusce imperdiet sed felis sed lobortis. Fusce cursus suscipit orci vitae maximus. Nullam tristique orci blandit, porta nisl id, volutpat urna. Vestibulum bibendum est nec elit interdum, eu vestibulum metus convallis.
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
            >
              Find out more!
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw1AxygQqdHtr_HQN-A1Xrjz&ust=1676682073884000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCchM2tm_0CFQAAAAAdAAAAABAE"
              className="img-thumbnail"
              alt="Logo"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              Card Title
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper tellus nunc, vitae ultricies elit facilisis eleifend. Fusce imperdiet sed felis sed lobortis. Fusce cursus suscipit orci vitae maximus. Nullam tristique orci blandit, porta nisl id, volutpat urna. Vestibulum bibendum est nec elit interdum, eu vestibulum metus convallis.
            </p>
            <button type="button" className="w-100 btn btn-lg btn-primary">
              Find out more!
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw1AxygQqdHtr_HQN-A1Xrjz&ust=1676682073884000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCchM2tm_0CFQAAAAAdAAAAABAE"
              className="img-thumbnail"
              alt="Logo"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              Card Title
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper tellus nunc, vitae ultricies elit facilisis eleifend. Fusce imperdiet sed felis sed lobortis. Fusce cursus suscipit orci vitae maximus. Nullam tristique orci blandit, porta nisl id, volutpat urna. Vestibulum bibendum est nec elit interdum, eu vestibulum metus convallis.
            </p>
            <button type="button" className="w-100 btn btn-lg btn-primary">
              Find out more!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
