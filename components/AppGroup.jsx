var AppGroup = React.createClass({
    render: function () {
        console.log('filter: ' + this.props.filter);
        var filter = this.props.filter;
        return (
            <div>
            {
                this.props.apps.map(function (app) {
                    if (true) {
                        return(
                            <AppBox key={app.name} name={app.name} link={app.link} />
                        )
                    } else {
                        return ;
                    }
                })
            }
            </div>
        );
    }
});
