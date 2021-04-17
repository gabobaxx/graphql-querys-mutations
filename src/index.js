import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

// Mongodb model
import Car from './models/Car';
// Graphql schema / type definitions
import typeDefs from './schema';
// Graphql resolvers
import resolvers from './resolvers';

const app = express();

// Express settings
app.set('port', process.env.PORT || 4000);
// Mongoose settings
const uri = 'mongodb://localhost/graphql-querys-mutations';
const opts = { useNewUrlParser: true, useUnifiedTopology: true };
// Apollo server settings
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: { Car },
	introspection: true,
	playground: true,
	playground: {
		endpoint: `http://localhost:4000/graphql`,
		settings: { 'editor.theme': 'dark' },
	},
});

server.applyMiddleware({ app });

// Database
mongoose
	.connect(uri, opts)
	.then(() => console.log('DB is connected'))
	.catch((e) => console.log(e));

// Express server
app.listen(app.get('port'), () =>
	console.log('Server on port', app.get('port'))
);
