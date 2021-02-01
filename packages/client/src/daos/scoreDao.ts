import { apiCall } from '../utils/apiCall';

export interface ScoreDao {
  getScores: () => Promise<ScoresByLang>;
}

// errors handled in components
export class ScoreDaoImpl implements ScoreDao {
  async getScores(): Promise<ScoresByLang> {
    const scores = await apiCall.get<ScoresByLang>('/scores');
    return scores;
  }
}
