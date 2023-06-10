import { configureStore } from '@reduxjs/toolkit'
import SubjectCardStore from "./SubjectCardStore";
import TopicCardStore from "./TopicCardStore";
import UserDataStore from './UserDataStore'
import ScoreGame from './ScoreGame';

export const store = configureStore({
  reducer: {
    SubjectCardStore: SubjectCardStore,
    TopicCardStore:TopicCardStore,
    UserDataStore:UserDataStore,
    ScoreGame:ScoreGame,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch