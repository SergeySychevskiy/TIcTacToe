const API_URL = 'http://localhost:3001/api/move';

export async function makeComputerMove(board: string[]): Promise<string[]> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ board }),
    });

    if (!response.ok) {
      throw new Error('Failed to make computer move');
    }

    const data = await response.json();
    return data.board;
  } catch (error) {
    console.error('Error making computer move:', error);
    return board;
  }
}
