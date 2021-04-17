import { gql } from 'apollo-server-express';

export default gql`
	type Car {
		_id: ID!
		name: String!
	}

	type Query {
		cars: [Car]
	}

	type Mutation {
		createCar(name: String!): Car!
	}
`;
