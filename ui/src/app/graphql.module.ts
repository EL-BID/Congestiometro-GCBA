import { NgModule } from '@angular/core';

import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink) {
  const auth = setContext(() => {
    const token = localStorage.getItem('token');
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  });
  return {
    link: ApolloLink.from([
      auth,
      httpLink.create({ uri: `${location.protocol}//${location.hostname}/graphql/v1/graphql` }),
    ]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
